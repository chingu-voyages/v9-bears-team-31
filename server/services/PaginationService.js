import responses from '../helper/responses';

module.exports = {
  paginate: async (
    model,
    res,
    currentpage,
    perpage,
    criteria,
    populateField,
  ) => {
    try {
      const pagination = {
        page: parseInt(currentpage) || 0,
        limit: parseInt(perpage) || 20,
      };
      const search = criteria || {};
      const count = await model.countDocuments(search);
      const data = await model
        .find(search)
        .sort({
          averageReview: -1,
        })
        .populate(populateField)
        .limit(pagination.limit)
        .skip(pagination.page * pagination.limit);
      if (data.length) {
        const numberOfPages = Math.ceil(count / pagination.limit);
        const nextPage = parseInt(pagination.page) + 1;
        const meta = {
          page: pagination.page,
          perPage: pagination.limit,
          previousPage: pagination.page > 1 ? parseInt(pagination.page) - 1 : false,
          nextPage: numberOfPages >= nextPage ? nextPage : false,
          pageCount: numberOfPages,
          total: count,
        };
        return res.status(200).send(responses.output(200, 'Records retrieved successfully', data, meta),);
      }
      return res.status(200).status(200).send({
        message: 'No results found.',
        data: [],
      });
    } catch (err) {
      return res.status(500).send(responses.error(500, `Error getting data ${err.message}`));
    }
  },
};

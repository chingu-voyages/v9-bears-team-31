import { FormControl } from '@angular/forms';

export function requiredFileType( type: string[] ) {
  return ( control: FormControl ) => {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.indexOf(extension.toLowerCase()) > -1 ) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}


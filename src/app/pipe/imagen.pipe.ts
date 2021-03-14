import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(userImage: string): unknown {

    return (userImage==='')? 'assets/img/avatar.png': userImage;
  }

}

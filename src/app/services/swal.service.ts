import {Injectable} from "@angular/core";

declare var swal: any;

@Injectable()
export class SwalService {

  private $danger = '#df382c';
  private $default = '#aea79f'
  private $success = '#2c8d3a';
  private $primary = '#e95420';

  constructor() {
  }

  public warn(title = "Are you sure?",
              text = "This action cannot be undone.",
              confirmText = 'Yes, delete it!'): Promise<any> {
    return <Promise<any>>swal({
      title: title,
      text: text,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: this.$danger,
      cancelButtonColor: this.$default,
      confirmButtonText: confirmText
    });
  }

  public success(title = "Success!", text?: string): Promise<any> {
    return <Promise<any>>swal({
      title: title,
      type: "success",
      text: text,
      confirmButtonColor: this.$success,
    });
  }

  public error(title = "Whoops!", text = "Something went wrong! Please try again later.") {
    return <Promise<any>>swal({
      title: title,
      type: "error",
      text: text,
      confirmButtonColor: this.$primary,
    });
  }

}

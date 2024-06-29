import { EndpointService } from "./../../../../core/http/endpoint.service";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "v1-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent {
  addDataForm: FormGroup;
  data: any[] = [];

  constructor(
    private fb: FormBuilder,
    private endpoint: EndpointService,
  ) {}

  ngOnInit() {
    this.addDataForm = new FormGroup({
      data: new FormControl(""),
    });
    this.onClick();
  }
  onClick() {
    this.endpoint
      .user()
      .getAllTest()
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
  onSubmit() {
    const formData = this.addDataForm.value;
    this.endpoint.testData(this.addDataForm.value).subscribe(
      (response: any) => {
        console.log("Data submitted", response);
        this.onClick();
      },
      (error) => {
        console.error("Error submitting data", error);
      },
    );
  }
}

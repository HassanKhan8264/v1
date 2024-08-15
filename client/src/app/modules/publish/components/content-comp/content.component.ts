import { EndpointService } from "./../../../../core/http/endpoint.service";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  decrement,
  increment,
  reset,
} from "src/app/core/store/states/counter/counter.action";
import { CounterState } from "src/app/core/store/states/counter/counter.reducer";
import { selectCount } from "src/app/core/store/states/counter/counter.selector";

@Component({
  selector: "v1-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent {
  addDataForm: FormGroup;
  data: any[] = [];

  count$: Observable<number>;

  ngOnInit() {
    this.addDataForm = new FormGroup({
      data: new FormControl(""),
    });
    // this.onClick();
  }
  constructor(
    private store: Store<CounterState>,
    private fb: FormBuilder,
    private endpoint: EndpointService,
  ) {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  // onClick() {
  //   this.endpoint
  //     .user()
  //     .getAll()
  //     .subscribe((data: any) => {
  //       console.log(data);
  //       this.data = data;
  //     });
  // }
  // onSubmit() {
  //   const formData = this.addDataForm.value;
  //   this.endpoint.testData(this.addDataForm.value).subscribe(
  //     (response: any) => {
  //       console.log("Data submitted", response);
  //       this.onClick();
  //     },
  //     (error) => {
  //       console.error("Error submitting data", error);
  //     }
  //   );
  // }
}

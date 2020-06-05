import { ComunicatorService } from "./../../../../../services/utils/comunicator.service";
import { ClientsService } from "../../../../../services/clients/clients.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Client } from "src/app/models/client.model";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-client-creation",
  templateUrl: "./client-creation.component.html",
  styleUrls: ["./client-creation.component.sass"],
})
export class ClientCreationComponent implements OnInit {
  createClientForm: FormGroup;
  clientTypes = [
    { label: "Empresa", value: "Empresa" },
    { label: "Particular", value: "Particular" },
  ];
  constructor(
    private fb: FormBuilder,
    private clientsService: ClientsService,
    private messageService: MessageService,
    private comunicator: ComunicatorService
  ) {}

  ngOnInit(): void {
    this.createClientForm = this.fb.group({
      name: ["", Validators.required],
      type: ["Particular", Validators.required],
    });
    this.createClientForm.valueChanges.subscribe((data) => {
    });
  }
  createClient() {
    let client: Client = new Client();
    client.name = this.createClientForm.value.name;
    client.type = this.createClientForm.value.type;

    this.clientsService.create(client).subscribe(
      (success) => {
        this.messageService.add({
          severity: "success",
          detail: "El nuevo cliente se ha creado con exito",
          summary: "Cliente creado",
        });
      },
      (error) => {
      }
    );
  }
  warnCreated(e) {
    this.comunicator.sendMessage("Client created");
  }
}

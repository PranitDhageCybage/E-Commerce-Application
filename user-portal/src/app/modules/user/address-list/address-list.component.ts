import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
})
export class AddressListComponent implements OnInit {
  addresses: any = [];
  selectedAddress: number = 0;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadAddress();
  }

  loadAddress() {
    this.userService.getAddress().subscribe((response: any) => {
      if (response['status'] == 'success') {
        this.addresses = response['data'];
      } else {
        console.log(response['error']);
      }
    });
  }

  onSelectAddress(event: any) {
    this.selectedAddress = event.target.value;
  }

  onDelete(address: any) {
    this.userService.deleteAddress(address['id']).subscribe((response: any) => {
      if (response['status'] == 'success') {
        this.loadAddress();
      } else {
        console.log(response['error']);
      }
    });
  }

  placeOrder() {}
}

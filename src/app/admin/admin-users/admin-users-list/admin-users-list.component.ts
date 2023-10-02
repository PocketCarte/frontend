import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminUser } from '../../shared/types/admin-user';
import { AdminUsersService } from '../shared/admin-users.service';
import { Subscription } from 'rxjs';
import { AdminSpinnerService } from '../../shared/services/admin-spinner.service';
import { AdminModalService } from '../../shared/services/admin-modal.service';
import { AdminUsersAddComponent } from '../admin-users-add/admin-users-add.component';
import { AdminUsersEditComponent } from '../admin-users-edit/admin-users-edit.component';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit,OnDestroy{

  public tableOptions = [
    {
      label: 'ID',
      column: 'id',
    },
    {
      label: 'Nome',
      column: 'name',
    },
    {
      label: 'Email',
      column: 'email',
    },
    {
      label: 'Permissão',
      column: 'permission',
    },
    {
      deleteButton: true,
      editButton: true,
    },
  ];
  public data: AdminUser[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(private adminUsersService: AdminUsersService, public adminSpinnerService: AdminSpinnerService, private adminModalService: AdminModalService) {}

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    await this.adminUsersService.getUsers();
    this.adminSpinnerService.showing = false;
    this.subscriptions.add(
      this.adminUsersService.users$.subscribe((result) => {
        this.data = result;
      })
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleAddUser(): void {
    this.adminModalService.open({
      title: 'Adicionar usuário',
      component: AdminUsersAddComponent
    })
  }

  public handleDeleteUser(event: any): void {
    this.adminUsersService.deleteUser(event.id).then(() => {
      alert(`Usuário ${event.name} deletado com sucesso`);
    }).catch(() => {
      alert(`Ocorreu um erro ao deletar o usuário ${event.name}`)
    })
  }

  public handleEditUser(event: any): void {
    this.adminModalService.open({
      title: 'Editar usuário',
      component: AdminUsersEditComponent,
      data: {
        userId: event.id
      }
    })
  }

}

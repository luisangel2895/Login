<template>
  <div class="user">
    <div style="padding-left: 120px; padding-right: 120px; min-height: 300px">
      <div class="argt" style="margin-bottom: 20px">
        <div class="iscbutton">New User</div>
      </div>
      <div class="tabloe">
        <b-table sticky-header :items="items" :fields="fields">
          <template #cell(edit)>
            <i class="fa fa-edit"></i>
          </template>
          <template #cell(deleted)>
            <i class="fa fa-trash"></i>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
          thClass: 'tabletittle',
          tdClass: 'tablefila'
        },
        {
          key: 'username',
          label: 'Username',
          thClass: 'tabletittle',
          tdClass: 'tablefila'
        },
        {
          key: 'language',
          label: 'Language',
          thClass: 'tabletittle',
          tdClass: 'tablefila'
        },
        {
          key: 'status',
          label: 'Status',
          thClass: 'tabletittle',
          tdClass: 'tbstatus'
        },
        {
          key: 'last_Login',
          label: 'Last Login',
          thClass: 'tabletittle',
          tdClass: 'tablefila'
        },
        {
          key: 'edit',
          label: '',
          thClass: 'tabletittle',
          tdClass: 'tablefila'
        },
        {
          key: 'deleted',
          label: '',
          thClass: 'tabletittle',
          tdClass: 'tablefila'
        }
      ],
      items: [
        {
          name: 'HOLA',
          username: 'Dickerson',
          language: 'Macdonald',
          status: 'Active',
          last_Login: '25/06/2021',
          edit: 'fa-edit',
          deleted: 'fa-trash'
        }
      ]
    }
  }
}
</script>

<style>
.user {
  height: 445px;
  position: relative;
  padding: 60px 50px 20px;
}
.argt {
  text-align: right;
}

div {
  display: block;
}
.tablefila {
  color: #7d889f;
  width: 15%;
}
.tbstatus {
  color: #00a5ff !important;
  width: 15%;
}
.tabletittle {
  padding: 15px !important;
  /* text-align: center; */
  color: #bdc4d5 !important;
  font-size: 11px !important;
  padding-bottom: 5px !important;
}
.tabloe i {
  cursor: pointer;
}
</style>

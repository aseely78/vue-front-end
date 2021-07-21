<template>
    <div class="dashboard-page">
        <b-container>
            <h1> Dashboard </h1>
            <b-row>
                <b-col>
                    <b-form-select
                    v-model="selectedGoogleId"
                    :options="accountOptions"
                    value-field="googleId"
                    text-field="viewName"
                    class="mt-3"
                    ></b-form-select>
                </b-col>
            </b-row>
            <b-table striped hover :items="items"></b-table>
        </b-container>
    </div>
</template>

<script>
import { loadingSpinnerConfig } from '@/config/settings'
import { apiServices } from '@/services/index'
export default {
    data () {
      return {
        selectedGoogleId: 1,
        accountOptions: [],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    created () {
        const loader = this.$loading.show(loadingSpinnerConfig)
        apiServices.googleAccounts().then(resp => {
            this.accountOptions = resp.data
            loader.hide()
        }).catch((err) => {
            console.log(err)
            loader.hide()
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
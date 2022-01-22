import CompaniesAPI from '@/api/companies.js'

export default ({ $axios }, inject) => {
  const api = {
    companies: CompaniesAPI($axios),
  }

  inject('api', api)
}

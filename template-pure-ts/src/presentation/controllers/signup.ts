import { MissingParamError } from '../errors/missing-param-error'
import { HttpResponse, httpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle(httpRequest: httpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    // for (const field of requiredFields) {
    //   if (!requiredFields[field]) {
    //     return badRequest(new MissingParamError(field))
    //   }
    // }

    requiredFields.forEach((field: string) => {
      if (!field) {
        return badRequest(new MissingParamError(field))
      }

      return {
        statusCode: 200,
        body: {},
      }
    })
  }
}

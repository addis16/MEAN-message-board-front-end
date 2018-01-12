export class AuthController {

    constructor($auth) {
        'ngInject';

        this.$auth = $auth;
    }

    register() {
        this.$auth.signup({email: 'fuck@Faggot.com'});
    }
}

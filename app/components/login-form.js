import Component from '@glimmer/component';
import { action } from "@ember/object"
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
    @tracked
    userId = null

    get isDisabled() {
        return !this.userId
    }

    loginUserWithId(val) {
        console.log({ val })
    }    
    /**
     * 
     * @param {Event & { target: HTMLFormElement } } evt
     */

    @action
    onLoginFormSubmit(evt){
         evt.preventDefault() 
        const { target } = evt
        const val = target.querySelector("select").value
        this.loginUserWithId(val)
    }

    /**
     * 
     * @param {Event & { target: HTMLSelectElement }} evt 
     */
    @action
    onSelectChanged(evt) {
        this.userId = evt.target.value
    }
}



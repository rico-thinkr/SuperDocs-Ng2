

import {NgComponent} from '../../utils/component.providers';

@NgComponent({
    selector:'main-page',
    template:`
    <nav-bar></nav-bar>
    <div id="wrapper">
        <<div class="row">
            <div class="col-lg-12">
                <div class="wrapper wrapper-content animated fadeInUp">
                    <div class="ibox">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <footer></footer>`
})
export class Home_Component{

}

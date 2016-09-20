
import {NgComponent} from '../utils/component.providers';

@NgComponent({
    selector:'footer',
    template:`<div class="footer fixed" style="font-size: 10px; font-weight: 100;">
    <div class="pull-right">
        10GB of
        <strong style="font-weight: 500">250GB</strong>
        Free.
    </div>
            <div>
                <strong style="font-weight: 500">Copyright</strong>
                Fastcase © 2016-2017
            </div>
    </div>
`
})
/**
 * 页脚组件
 */
export class Footer_Component{

}

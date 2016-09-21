import {NgComponent,NgInput,OnInitComponent} from '../../utils/component.providers';
import {Lib_Detail} from './libs.entity';

@NgComponent({
    selector:`lib-detail`,
    template:`<div class="col-lg-8" style="padding-left: 0;padding-right: 0">
                    <div class="ibox">
                        <div class="ibox-content">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="m-b-md">
                                        <a href="" class="btn btn-white btn-xs pull-right">Edit Library</a>

                                        <h2>{{lib.name}}</h2>
                                    </div>
                                    <dl class="dl-horizontal">
                                        <dt>Status:</dt>
                                        <dd><span class="label label-primary">{{lib.status}}</span></dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-5">
                                    <dl class="dl-horizontal">

                                        <dt>Created by:</dt>
                                        <dd>{{lib.creator}}</dd>
                                        <dt>Files Count:</dt>
                                        <dd>{{lib.fileCount}}</dd>
                                    </dl>
                                </div>
                                <div class="col-lg-7" id="cluster_info">
                                    <dl class="dl-horizontal">

                                        <dt>Last Updated:</dt>
                                        <dd>{{lib.lastUpdate|date:'yyyy-MM-dd HH:mm:ss'}}</dd>
                                        <dt>Created:</dt>
                                        <dd>{{lib.createTime|date:'yyyy-MM-dd HH:mm:ss'}}</dd>

                                    </dl>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <dl class="dl-horizontal">
                                        <dt>Description:</dt>
                                        <dd>
                                            <small>Project completed in <strong>60%</strong>. Remaining close the project, sign a contract and invoice.</small>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Library Files </h5>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-group">
                                        <input type="text" placeholder="keyword" name="search" class="form-control input-sm" ng-model="queryName">
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-primary" type="submit">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <!--  此处 是 文件列表 -->


                        </div>
                    </div>
                </div>`
})
export class Lib_Detail_Component{

    @NgInput()
    lib:Lib_Detail;
}
// <div class="table-responsive">
//     <table class="table table-striped" >
//         <thead>
//             <tr>
//
//                 <th>Completed </th>
//                 <th>Task</th>
//                 <th>Date</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody *ngIf="selectedLib.files">
//
//             <tr *ngFor='let file of selectedLib.files'>
//                 <td>{{file.name}}</td>
//                 <td>40%</td>
//                 <td>Jul 16, 2013</td>
//                 <td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
//             </tr>
//
//         </tbody>
//     </table>
// </div>

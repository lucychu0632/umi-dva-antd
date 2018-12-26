//多配置环境打包
import Logo from 'assets/images/yay.jpg';
// import code from 'assets/images/newInfo/newCode.jpeg';
const travelUrl=process.env.API_ENV;
const proxyUrl='';

//多配置环境打包

module.exports = {
  commonInfo:{
    Logo: Logo,
    websiteName: 'react组件总结',
    // enterpriseName: '杭州律云科技有限公司',
    // recordNumber: '浙ICP备18027577-2号',
    // contactTel:'400-626-0010',
    // contactEmail:'lyzx@yconsume.com',
    // wechatName:'律企服',
    // wechatImg: code,
    // domainShort: 'yconsume.com',
  },
  api: {
    /* 登录 参数action:login username:手机/邮箱 password:6位以上字母加数字 */
    login: `${proxyUrl}/api/shop/member!login.do`,
    /* 检测注册企业名称 参数 enterpriseName 企业名称 */
    checkEnterpriseName: `${proxyUrl}/api/enterprise/enterprise!checkEnterpriseName.do`,
    /* 检测注册手机验证码 参数 mobilevalidcode 手机验证码,mobile 手机号 */
    checkMobileValidCode: `${proxyUrl}/api/shop/member!checkMobileValidCode.do`,
    /* 检测注册手机号码 参数 mobile 手机号 */
    checkMobile: `${proxyUrl}/api/shop/member!checkeMobile.do`,
    /* 检测注册邮箱 参数 email 邮箱 */
    checkEmail: `${proxyUrl}/api/shop/member!checkemail.do`,
    /* 发送手机注册码 参数 username：手机号  smstype=1
     * 忘记密码       参数 username    smstype=3*/
    sendMobileValidCode: `${proxyUrl}/api/shop/member!sendMobileValidCode.do`,
    /* 注册 参数 */
    regEnterprise: `${proxyUrl}/api/enterprise/enterprise!regEnterprise.do`,
    /* 获取信息 参数 */
    getMemberInfo: `${proxyUrl}/api/enterprise/enterprise!getMemberInfo.do`,
    /* 获取二维码图片 参数 */
    getQrCodeImage: `${travelUrl}/V1.5.5/api/wechat/mp/getQrCodeImage?accessToken=0`,
    /* 获取二维码图片 参数 username  mobilevalidcode  newpassword passwordt*/
    forgotPassword: `${proxyUrl}/api/shop/member!changePassword.do`,
    getMenu: `${proxyUrl}/api/workflow/character!get_menu_list.do`,
    getDepartmentListForTree: `${proxyUrl}/api/enterprise/department!getDepartmentListForTree.do`,
    /* 组织架构+员工搜索 参数 search_value 查询内容*/
    searchOrganizationNav: `${proxyUrl}/api/enterprise/department!getDepartmentListForSearch.do`,
    /* 部门负责人搜索 参数 search_value 查询内容 department_id=0 部门ID */
    searchDepartmentMember: `${proxyUrl}/api/enterprise/departmentmember!getEnterpriseMemberList.do`,
    /* 新建部门 参数 department_Name 部门名称 superior_Department_Id  上级部门ID right1  部门负责人 member_id 最大数量 1 */
    addSubDepartment: `${proxyUrl}/api/enterprise/department!createDepartmentWithMemberLists.do`,
    /* 部门移动 参数 department_id 部门ID superior_Department_Id  上级部门ID */
    moveDepartment: `${proxyUrl}/api/enterprise/department!moveDepartmentToAnotherDepartment.do`,
    /* 删除部门 参数 department_id 部门ID */
    delDepartment: `${proxyUrl}/api/enterprise/department!dismissDepartment.do`,
    /* 部门信息查询 参数 department_id 部门ID */
    getEditDepartment: `${proxyUrl}/api/enterprise/department!getDepartmentInformation.do`,
    /* 部门修改 参数 department_Name 部门名称 department_id          部门id right1  部门负责人 member_id 最大数量 1 */
    editDepartment: `${proxyUrl}/api/enterprise/department!modifyDepartment.do`,
    /* 各级部门员工列表 department_id -1 待分配部门 其他 部门ID current_page 当前页码 search_value 查询字段 * */
    getMemberList: `${proxyUrl}/api/enterprise/departmentmember!getDepartmentMemberList.do`,
    getWaitingList: `${proxyUrl}/api/enterprise/departmentmember!getAllUnDistributeDepartmentMember.do`,
    downloadMemberInfo: `${proxyUrl}/api/enterprise/departmentmember!get_Member_List_For_Excel.do`,
    /* 删除员工 department_id -1 待分配部门 其他 部门ID member_id * */
    deleteMember: `${proxyUrl}/api/enterprise/departmentmember!deleteMemberFromDepartment.do`,
    /* 员工离职   member_id * */
    awayMember: `${proxyUrl}/api/enterprise/departmentmember!deleteMemberFromEnterprise.do`,
    /* * department_id 移动到的ID right         (member_id列表) 人员列表 多个人员以逗号隔开 * */
    addWaitingMember: `${proxyUrl}/api/enterprise/departmentmember!moveMemberToDepartment.do`,
    /* 员工单个邀请 username  用户名 mobile    手机号  email     邮箱  member_no 员工编号 password  密码  * */
    onlyInvite: `${proxyUrl}/api/enterprise/departmentmember!inviteMemberToEnterprise.do`,
    /*  员工批量邀请 file         需要上传的文件 fileFileName 需要上传的文件名 * */
    multipleInvite: `${proxyUrl}/api/enterprise/departmentmember!inviteMemberToEnterpriseUseExcel.do`,
    /* 角色列表（含搜索） 参数 searchValue 查询条件*/
    characterSearchValue: `${proxyUrl}/api/workflow/character!get_user_role_list.do`,
    /* 修改角色名称  参数 user_role_id   角色ID  user_role_name 角色名称*/
    characterUserRole: `${proxyUrl}/api/workflow/character!update_UserRole.do`,
    /* 删除角色  参数 user_role_id   角色ID */
    deleteUserRole:`${proxyUrl}/api/workflow/character!delete_UserRole.do`,
    /* 根据角色获取角色内员工列表（含搜索） 参数 user_role_id   角色ID current_page 分页 searchValue  */
    characterUserList: `${proxyUrl}/api/workflow/character!get_user_role_link_list.do`,
    /* 角色中删除人员 参数 user_role_id   角色ID member_ids   角色会员关联关系ID的集合，以，分割  */
    characterDeteleUser: `${proxyUrl}/api/workflow/character!delete_UserRoleLinks.do`,
    /* 角色中添加员工（一个员工可以加入到多个角色中去,排除当前角色中的人员） 参数 user_role_id 角色ID member_ids 角色会员关联关系ID的集合，以，分割  */
    characterAddUser: `${proxyUrl}/api/workflow/character!add_UserRoleLink.do`,
    /* 获取当前角色中未添加的人员列表 参数 ucurrent_page 当前页码 user_role_id 角色ID searchValue  搜索条件  */
    characterwithoutUser: `${proxyUrl}/api/workflow/character!get_member_list_without_user_role.do`,
    /* 设定、取消当前角色中的审批人 参数 user_role_id  member_id  schange_type 1审批人 0 不是审批人  */
    characterSetUser: `${proxyUrl}/api/workflow/character!change_user_link_role_is_setting.do`,
    /* 新增角色 参数 user_role_name 角色名称  */
    addCharacter: `${proxyUrl}/api/workflow/character!add_UserRole.do`,
    /* 获取角色权限，判断是否可以修改/删除角色  */
    getCharacterRole: `${travelUrl}/V1.5.4/api/enterprise/checkUserRole?accessToken=0`,
    /* 批量上传员工 参数     */
    uploadMemberList: `${proxyUrl}/api/enterprise/departmentmember!inviteMemberToEnterpriseUseExcel.do`,
    /* 员工信息查询 参数 member_id PS:返回值中的 can_delete 0 可以删除 1 不可以删除*/
    getMemberInfoForEdit:`${proxyUrl}/api/enterprise/departmentmember!getMemberInfoForEdit.do`,
    /* 员工信息修改 参数 relation_id 会员、部门关系ID mobile手机号  email邮箱地址
     member_no   员工编号（选填）  nickname department_id 部门ID
     is_department_admin 是否是部门负责人*/
    modifyMember:`${proxyUrl}/api/enterprise/departmentmember!modifyDepaermentMemberInfo.do`,
    /* 权限列表  */
    autorityList: `${proxyUrl}/api/workflow/character!get_all_site_menu_list.do`,
    /* 权限设定  */
    autorityPermissions: `${proxyUrl}/api/workflow/character!change_user_role_permissions.do`,
    /*获取所有的工作流模板类型的大类*/
    getApproveList:`${travelUrl}/V1.5.4/api
/enterprise/workflowTemplate/getWorkFlowTemplateList?accessToken=0`,
    /*获取大类下的所有工作流模板*/
    getChildApproveList:`${travelUrl}/V1.5.4/api
/enterprise/workflowTemplate/getChildWorkFlowTemplateList?accessToken=0`,
    /*更改审批模板大类状态*/
    changeMainStatus:`${travelUrl}/V1.5.4/api
/enterprise/workflowTemplate/changeMainWorkFlowTemplateStatus?accessToken=0`,
    /*新建时获取审批模板类型 */
    getTemplateTypeList: `${proxyUrl}/api/workflow/template!get_TemplateTypeList.do`,
    /*新建审批模板
     template_type_id 模板类型ID
     template_name    审批模板名称
     template_content 审批模板说明*/
    createTemplate: `${proxyUrl}/api/workflow/template!create_Template.do`,
    /*审批模板 停用、启用、删除
     template_id 模板ID
     template_status  0 启用 1 停用 2 删除*/
    modifyTemplate: `${proxyUrl}/api/workflow/template!startOrstopOrdelete_Template.do`,
    /*创建或修改生效范围 template_id   模板ID
     departmentids 生效范围部门*/
    saveApproveRange: `${proxyUrl}/api/workflow/template!createOrmodify_scope.do`,
    /*获取生效范围 template_id  模板ID*/
    getApproveRange: `${proxyUrl}/api/workflow/template!get_ScopeList.do`,
    /*获取审批步骤template_id  模板ID*/
    getApproveProgress: `${proxyUrl}/api/workflow/template!get_StepList.do`,
    /*获取角色列表 (含当前审批人员数量)*/
    getCharacterList: `${proxyUrl}/api/workflow/character!get_user_role_list_with_approve_member_count.do`,
    /*获取审批人列表*/
    getApproveMemberList: `${proxyUrl}/api/workflow/template!find_approve_member_list.do`,

    /*设定审批步骤和抄送人*/
    saveTemplate: `${proxyUrl}/api/workflow/template!createOrmodify_step.do`,
    /*添加抄送人时获取抄送人列表*/
    getTransferNotifyMember: `${proxyUrl}/api/workflow/template!find_notify_member_list.do`,
    /* 部门选择  */
    getMemberInDepartmentList: `${proxyUrl}/api/enterprise/departmentmember!getMemberInDepartmentList.do`,
    /* 申请类型选择  参数task_type: 申请类型  department_id: 部门 */
    getTaskTemplateList: `${proxyUrl}/api/workflow/task!get_taskTemplate_List.do`,
    /* 文件上传 */
    uploadfiles: `${proxyUrl}/api/workflow/task!upload_attachment_files.do`,
    /* 审批人设定 */
    TaskStepApplyPeople: `${proxyUrl}/api/workflow/task!get_TaskStep_by_template_id.do`,
    /* 提交申请 */
    applyTask: `${proxyUrl}/api/workflow/task!charge_Task.do`,
    /* 企业名称修改弹框提示 */
    getEnterpriseCredentialsInfo: `${proxyUrl}/api/enterprise/enterprise!getEnterprise_Credentials_Info.do`,
    /* 检测企业名称是否重复 */
    changeEnterpriseName: `${proxyUrl}/api/enterprise/enterprise!change_enterprise_name.do`,
    /* 检测企业邮箱是否重复 */
    enterpriseEmployeeEmailList: `${proxyUrl}/api/enterprise/departmentmember!enterpriseEmployeeEmailList.do`,
    /* 企业管理员转让 */
    modifyEnterpriseAdmin: `${proxyUrl}/api/enterprise/enterprise!modify_enterprise_admin.do`,

    /* 成为供应商 */
    supplierShopstart: `${proxyUrl}/api/enterprise/supplierstore!supplier_shop.do`,
    /* 成为供应商初始数据 */
    enterpriseInformation: `${proxyUrl}/api/enterprise/supplierstore!get_enterprise_information.do`,
    /* 获取审批记录页列表 */
    getRecordsList: `${proxyUrl}/api/workflow/task!getTaskList.do`,
    changeMemberEmail: `${proxyUrl}/api/shop/member!changeMemberEmail.do`,
    changeMemberMobile: `${proxyUrl}/api/shop/member!changeMemberMobile.do`,
    changeMemberPassword: `${proxyUrl}/api/shop/member!changePassword.do`,
    /*向手机或邮箱(用户密码找回邮件)发送验证码  username 用户名
     password 密码
     smstype  2,更换手机号 7，更换邮箱*/
    sendValidCode: `${proxyUrl}/api/shop/member!sendValidCodeForChangeMobileOrEmail.do`,
    cancelBind: `${travelUrl}/V1.5.5/api/wechat/mp/unlinkMPOnPC?accessToken=0`,
    /* 退出登录   */
    logout: `${proxyUrl}/api/shop/member!logout.do`,
    getIndexMenu: `${proxyUrl}/api/enterprise/indexpage!query_site_menu.do`,
    getIndexApproveList: `${proxyUrl}/api/enterprise/indexpage!query_task.do`,
    getIndexApply: `${proxyUrl}/api/enterprise/indexpage!query_charge_task_type.do`,
    getIndexTravelList: `${proxyUrl}/api/enterprise/indexpage!query_trip.do`,
    getIndexSupplierOrder: `${proxyUrl}/api/enterprise/indexpage!query_order.do`,
    /* 版本更新数据 */
    updateVersion: `${proxyUrl}/api/enterprise/versionArticle!version_article_list.do`,
    /* 我的(企业)供应商列表  search_string 查询条件 current_page  当前页码 默认为第一页 */
    invitedEnterpriseList: `${proxyUrl}/api/enterprise/invite_enterprise!get_new_invited_enterprise_list.do`,
    /* 删除供应商  invite_enterprise_id  */
    deleteInviteEnterprise: `${proxyUrl}/api/enterprise/invite_enterprise!delete_InviteEnterprise.do`,
    /* 邀请供应商  emails 邮箱列表  */
    inviteEnterprise: `${proxyUrl}/api/enterprise/invite_enterprise!invite_Enterprise.do`,
    /* 供应商列表  search_string 查询条件  current_page  当前页码  */
    enterpriseStoreList: `${proxyUrl}/api/enterprise/invite_enterprise!get_enterprise_store_list.do`,
    /* 获取省市区  address_type 地址类型 province 省 city 市  region 区 address_id   地址编号  */
    getAddressList: `${proxyUrl}/api/enterprise/supplierstore!getAddressList.do`,
    getNoticeCount: `${proxyUrl}/api/message/messageapply!check_new_message_apply.do`,
    /*消息通知-查询未读通知/待办消息记录*/
    getNoticeList:`${proxyUrl}/api/message/messageapply!get_message_apply_list.do`,
    /*消息通知-设置消息为已读*/
    setNoticeRead:`${proxyUrl}/api/message/messageapply!update_message_apply_read.do`,
    /*消息通知-清空通知消息/待办消息*/
    noticeEmpty:`${proxyUrl}/api/message/messageapply!update_message_apply_del.do`,
    /*供应商订单列表 */
    ShopOrderList: `${proxyUrl}/api/workflow/orderlist!get_ShopOrderList.do`,
    setPhoto: `${proxyUrl}/api/shop/member!uploadAvatar.do`,
    setVersionStatus: `${proxyUrl}/api/enterprise/versionArticle!update_read_version.do`,
    /*飞机票--获取所有机场城市*/
    getAirportCity:`${travelUrl}/V1.5.1/api/ctrip/flight/getAllAirportCity?accessToken=0`,
    /*火车票--获取所有有火车站的城市*/
    travelTrainCity:`${travelUrl}/V1.5.1/api/ctrip/train/station_name?accessToken=0`,
    // travelTrainCity:'http://127.0.0.1:9001/V1.5.1/api/ctrip/train/station_name?accessToken=0',
    /*火车票--获取所有火车票信息列表*/
    travelTrainList:`${travelUrl}/V1.5.1/api/ctrip/train/query?accessToken=0`,
    // travelTrainList:'http://127.0.0.1:9001/V1.5.1/api/ctrip/train/query?accessToken=0',
    /*火车票--获取当前车次火车经停列表*/
    travelTrainLineByTrainNo:`${travelUrl}/V1.5.1/api/ctrip/train/getTrainLineByTrainNo?accessToken=0`,
    // travelTrainLineByTrainNo:'http://127.0.0.1:9001/V1.5.1/api/ctrip/train/getTrainLineByTrainNo?accessToken=0',
    /*创建常用旅客*/
    addPassengers:`${proxyUrl}/api/enterprise/ctrip/commonlypassenger!createCommonlyPassenger.do`,
    /*修改常用旅客*/
    modifyPassengers:`${proxyUrl}/api/enterprise/ctrip/commonlypassenger!modifyCommonlyPassenger.do`,
    /*常用旅客列表*/
    passengersList:`${proxyUrl}/api/enterprise/ctrip/commonlypassenger!listCommonlyPassenger.do`,
    /*删除常用旅客*/
    deletePassengers:`${proxyUrl}/api/enterprise/ctrip/commonlypassenger!deleteCommonlyPassenger.do`,
    /*火车票--获取保险信息列表*/
    insuranceList:`${travelUrl}/V1.5.1/api/ctrip/train/getTrainBookPara?accessToken=0`,
    /*获取机票信息列表*/
    getAirTicket:`${travelUrl}/V1.5.1/api/ctrip/flight/query?accessToken=0`,
    /*提交行程所有信息*/
    toSaveOrderInfo:`${travelUrl}/V1.5.1/api/ctrip/order/saveOrderInfo?accessToken=0`,
    /*获取火车票购票订单行程列表*/
    travelTrainBuyOrder:`${proxyUrl}/api/workflow/orderlist!queryTrainOrderList.do`,
    /*差旅行程订单*/
    // travelOrderlist: '/api/workflow/orderlist!get_traveOrderList.do',
    travelOrderlist: `${proxyUrl}/api/workflow/orderlist!get_one_step_travel_order_list.do`,
    /*火车行程详情*/
    travelTrainOrderDetail:`${travelUrl}/V1.5.1/api/ctrip/train/queryTrainOrderInfo?accessToken=0`,
    getEnterpriseInfo:`${proxyUrl}/api/enterprise/enterpriseinfomation!get_enterprise_information.do`,
    /*火车退票*/
    travelTrainOrderRefund:`${travelUrl}/V1.5.1/api/ctrip/train/applyrefund?accessToken=0`,
    /*酒店--获取所有酒店信息*/
    searchHotelList:`${travelUrl}/V1.5.1/api/ctrip/hotel/searchHotelList?accessToken=0`,
    /*酒店--获取（入住日期内）酒店房型*/
    hotelRooms:`${travelUrl}/V1.5.1/api/ctrip/hotel/hotelRooms?accessToken=0`,
    //飞机票购买行程列表
    travelFlightBuyOrder:`${proxyUrl}/api/workflow/orderlist!queryFlightOrderList.do`,
    /*酒店--获取酒店详情*/
    hotelDetail:`${travelUrl}/V1.5.1/api/ctrip/hotel/hotelDetail?accessToken=0`,
    //获取机票保险信息
    getAirInsInfo:`${travelUrl}/V1.5.1/api/ctrip/flight/getFlightBookPara?accessToken=0`,
    /*飞机票行程详情*/
    travelFlightOrderDetail:`${travelUrl}/V1.5.1/api/ctrip/flight/queryFlightOrderInfo?accessToken=0`,
    /*获取酒店采购订单行程列表*/
    travelHotelBuyOrder:`${proxyUrl}/api/workflow/orderlist!queryHotelOrderList.do`,
    /*获取酒店行程详情*/
    travelHotelOrderDetail:`${travelUrl}/V1.5.1/api/ctrip/hotel/getHotelOrderDetail?accessToken=0`,
    /*飞机票、火车、酒店统一的取消行程，用type字段区分，0飞机票、1火车票、2酒店*/
    travelOrderCancel:`${travelUrl}/V1.5.1/api/ctrip/order/cancelTripFromTask?accessToken=0`,
    /*创建报销凭证*/
    createTripInvo:`${travelUrl}/V1.5.1/api/ctrip/order/createTripInvo?accessToken=0`,
    /*获取酒店退订订单行程列表*/
    travelHotelRefundOrder:`${proxyUrl}/api/workflow/orderlist!queryRefundHotelOrderList.do`,
    /*获取火车票退票订单行程列表*/
    travelTrainRefundOrder:`${proxyUrl}/api/workflow/orderlist!queryTrainRefundOrderList.do`,
    /*获取飞机票退票订单行程列表*/
    travelFlightRefundOrder:`${proxyUrl}/api/workflow/orderlist!queryFlightRefundOrderList.do`,
    /*获取飞机票改签订单行程列表*/
    travelFlightModifyOrder:`${proxyUrl}/api/workflow/orderlist!queryFlightChangeOrderList.do`,
    /*获取所有行程列表*/
    travelAllOrder:`${proxyUrl}/api/workflow/orderlist!queryAllOrderList.do`,
    applyRebookFlight:`${travelUrl}/V1.5.1/api/ctrip/flight/applyChange?accessToken=0`,
    /*酒店退订*/
    travelHotelRefund:`${travelUrl}/V1.5.1/api/ctrip/hotel/refHotelOrder?accessToken=0`,
    /*飞机票退票*/
    travelFlightOrderRefund:`${travelUrl}/V1.5.1/api/ctrip/flight/applyRefund?accessToken=0`,
    /*飞机退票订单详情*/
    travelFlightOrderRefundDetail:`${travelUrl}/V1.5.1/api/ctrip/flight/queryFlightRefundOrderInfo?accessToken=0`,
    /*飞机票改签订单详情*/
    travelFlightOrderModifyDetail:`${travelUrl}/V1.5.1/api/ctrip/flight/queryFlightChangeOrderInfo?accessToken=0`,
    /*火车票退票订单详情*/
    travelTrainOrderRefundDetail:`${travelUrl}/V1.5.1/api/ctrip/train/queryTrainRefundOrderInfo?accessToken=0`,
    flightModifyPayment:`${proxyUrl}/api/shop/payment.do?orderid=`,
    //删除已提交过财条付款的行程
    deleteOnLineRoute:`${travelUrl}/V1.5.1/api/ctrip/order/deleteTripFromTask?accessToken=0`,
    //获取机票律云价
    getFlightPolicy:`${travelUrl}/V1.5.1/api/ctrip/flight/getFlightPolicy?accessToken=0`,
    getEnterpriseVerify:`${travelUrl}/V1.5.4/api/enterprise/getEnterpriseVerify?accessToken=0`,
    uploadAttachmentFiles:`${proxyUrl}/api/enterprise/enterprise!upload_attachment_file.do`,
    submitVerifyInfo:`${travelUrl}/V1.5.4/api/enterprise/saveEnterpriseVerify?accessToken=0`,
    //是否允许弹出协议变更弹框
    getCanTan:`${travelUrl}/V1.5.5/api/wechat/departmentmember/getCanTan?accessToken=0`,
    //关闭协议变更弹框
    closeCanTan:`${travelUrl}/V1.5.5/api/wechat/departmentmember/setCanTan?accessToken=0`,
    //关闭协议变更弹框
    travelPay:`${travelUrl}/V1.5.1/api/ctrip/order/createOrder?accessToken=0`,
    //采购订单、差旅订单判断是否去支付
    memberCanPay:`${proxyUrl}/api/workflow/task!memberCanPay.do?accessToken=0`,
    //采购订单、差旅订单判断是否去支付
    resetMemberPassword: `${proxyUrl}/api/shop/member!resetMemberPassword.do?accessToken=0`,
    //公告列表
    messageNoticeList: `${travelUrl}/V1.5.6/api/messagecenter/messageNoticeList?accessToken=0`,
  }
};

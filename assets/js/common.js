
/**
 * url弹出框
 * @param title		标题
 * @param url		打开的页面地址
 * @param okFunc	成功后的函数
 * @param size	    弹出框的大小（类） 分别为 large   small    full   middle
 * @param className	    class（类）
 * @returns {*}		返回Dialog对象
 */
function st_dialogOpen(title, url, okFunc, size,className) {
    var _title = title;
    var _url = url;
    var _okFunc = okFunc;
    var _className = className;
    var _size = size;
    //var _cancelFunc = typeof(cancelFunc) == 'function' ?cancelFunc : function (){};
    //console.log(_size)
    var dialog = bootbox.confirm({
        title: _title,
        message: '<p class="text-center"><i class="fa fa-spin fa-spinner"></i> 页面加载中，请稍后...</p>',
        backdrop: true,
        size: _size,
        className: _className,
        buttons: {
            cancel: {
                label: '取消',
                className: 'btn-default btn-small'
            },
            confirm: {
                label: '确认',
                className: 'btn-primary btn-small'
            }
        },
        callback: function (result) {
            $('body').removeClass("modal-open-noscroll");
            if (result == true) {
                dialog.find('.modal-footer .btn-primary')
                    .attr("disabled", true);
                /*.html('<i class="fa fa-spinner fa-spin"></i>');*/
                //TODO 做数据验证和验证过程 如果成功则hide
                //dialog.modal('hide');

                _okFunc();
                // return false;
            } else {
                return true;
            }
            return true;
        }
    });
    dialog.init(function () {

        $.ajax({
            url: _url,
            dataType: "html",
            success: function (str) {
                dialog.find('.bootbox-body').html(str);
                dialog.find('.modal-footer .btn-primary').removeClass('hide');
            },
            error: function () {
                dialog.find('.bootbox-body').html("抱歉，加载失败");
            }
        });
    });
    dialog.on("hidden", function () {  // remove the actual elements from the DOM when fully hidden
        // alert(1);
    });
    return dialog;
}



/**
 * bootstrap 弹框
 * title  显示内容
 * position 显示位置
 * */

function toastrOk(title,position) {
    toastr.remove();
    toastr.options = {
        "positionClass": position,
    };
    toastr.success(title);
}

function toastrError(title,position) {
    toastr.remove();
    toastr.options = {
        "positionClass": position,
    };
    toastr.error(title);
}


//echarts 加载
function loadChart(id,option){
    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
    return myChart;
}


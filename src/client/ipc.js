
const {ipcMain} = require('electron')
const sql = require('mssql')
const connstr = 'mssql://sa:sa@192.168.43.43:1433/Ship2005Group'
const { QQ,MESSAGE } = require('./qq');

/*
ipcMain.on(GET_LOCAL_PRICE_MESSAGE, (event, arg) => {


    sql.connect(connstr).then(function() {

        let query = "SET DATEFIRST 1;"+
        " SELECT COST.JOBNO,CT_CARRI,CT_PORTL,CT_PORTD,CT_TRANSPORT,CT_ETSH,DATEPART(WEEKDAY,CT_ETSH) AS CT_WEEK,"+
        " CASE WHEN LEN(CT_CONCNT) > 0 THEN LEFT(CT_CONCNT,LEN(CT_CONCNT)-4-1) ELSE 1 END AS CT_BOXCOUNT,"+
        " CASE WHEN LEN(CT_CONCNT) > 0 THEN RIGHT(CT_CONCNT,4) ELSE '20GP' END AS CT_BOXTYPE,"+ 
        " CTI_RATE/CASE WHEN LEN(CT_CONCNT) > 0 THEN LEFT(CT_CONCNT,LEN(CT_CONCNT)-4-1) ELSE 1 END AS CTI_RATE"+
        " FROM COST"+
        " JOIN COSTITEM ON COST.JOBNO = COSTITEM.JOBNO AND COSTITEM.CTI_COSTCD = 'HYF' AND COSTITEM.CTI_CURRCD = 'USD' AND COSTITEM.CTI_OUT = 0"+
        " WHERE CT_TRAFFIC = 'SEA' AND CT_IEID = 'E' AND CT_LCLID = 'FCL'AND CT_BUSWAYID = 'F' AND CT_CANCELID = 'C';"


        new sql.Request().query(query).then(function(recordset) {

            console.log(recordset);

             event.sender.send(RETURN_LOCAL_PRICE_MESSAGE,recordset);

             sql.close();

      
        }).catch(function(err) {
            //sql.close();
            console.log(err);
             sql.close();
        });

    }).catch(function(err) {
        //sql.close();
        console.log(err);
        sql.close();
    });

    //sql.close();
    console.log(GET_LOCAL_PRICE_MESSAGE);
    console.log(arg);

    //return event.returnValue = [123,234];
})*/

var qq = new QQ();
qq.onInit = function(){

    
}
qq.onResponse = function(res){
    event.sender.send(MESSAGE.LOGIN,res);
}

ipcMain.on(MESSAGE.LOGIN,(event,arg)=>{

    console.log(MESSAGE.LOGIN);

    event.sender.send(MESSAGE.LOGIN,recordset);
    return event.returnValue = qq['on'+MESSAGE.LOGIN]();
})





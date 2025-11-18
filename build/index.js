function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="cero" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.login()}
                        </div>
                        <div class="tab-pane fade" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.clave_general()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.claves_todas() }    
                            
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>   
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>  
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs oculto hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-cero" data-toggle="tab" href="#cero" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cinco" data-toggle="tab" href="#cinco" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
              
            `
        },
        login:()=>{
            return `
            <div class="row">
                <div class="col-sm-0 col-md-3 col-lg-4 col-xl-4">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">

                    <div class="card card-rounded shadow col-12">
                        <div class="card-body p-2">

                            <img class="" width="100px" height="100px" src="./favicon.png">
                            
                            <br><br>

                            <div class="form-group">
                                <label class="negrita text-warning">Usuario</label>
                                <input type="text" class="negrita form-control" id="txtUser" placeholder='Escriba su usuario...'>
                            </div>

                            <div class="form-group">
                                <label class="negrita text-warning">Clave</label>
                                <input type="password" class="negrita form-control" id="txtPass" placeholder='Escriba su clave...'>
                            </div>

                            <br>

                            <button  align="center" class="btn btn-circle btn-info btn-xl hand shadow mano" id="btnLogin">
                                <i class="zmdi zmdi-lock zmdi-hc-fw"></i>
                            </button>

                        </div>
                    </div>

                </div>
                <div class="col-sm-0 col-md-3 col-lg-4 col-xl-4">
                </div>
            </div>
            `
        },
        clave_general:()=>{
            return `
            
            
            <select class="negrita text-danger" id="cmbSucursal">

            </select>
            <br><br><br>

            <div class="contacts row">

                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      
                            <div class="contacts__item" id="">
                                

                                <div class="contacts__info">
                                    <strong>Clave Actual</strong>
                                    <small>toque para copiar</small>
                                </div>

                                <button class="contacts__btn"></button>
                                <h1 class="text-warning negrita mano" id="lbClaveGeneral">--- --- ---</h1>
                            </div>

                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                            <div class="contacts__item text-center" id="">

                                
                                <div class="col-12 h-full" id="container_qr"></div>

                                <div class="contacts__info">
                                    <strong></strong>
                                    <small></small>
                                </div>

                                <button class="contacts__btn"></button>
                            </div>
                    </div>


                    
                </div>

            `
        },
        claves_todas:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    
                    <h2>Listado de GymBros</h2>
                    <br>
                    <label class="negrita text-danger" id="lbTotalClientes"></label>
                    <br>

                    <div class="table-responsive col-12">
                        <div class="form-group">
                            <input type="text" class="form-control text-info" placeholder="Escriba para buscar..." id="txtClienteBuscar" oninput="F.FiltrarTabla('tblClientes','txtClienteBuscar')">
                        </div>
                        <br>
                        <table class="table table-hover col-12" id="tblClientes">
                            <thead class="text-warning negrita">
                                <tr>
                                    <td>NOMBRE / TELEFONO</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataClientes">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-secondary btn-circle btn-bottom-l btn-xl mano shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
            </button>

            <button id="btnNuevoCliente" class="btn btn-success btn-circle btn-bottom-r btn-xl mano shadow">
                <i class="zmdi zmdi-plus zmdi-hc-fw"></i>
            </button>

            `
        },
        modal_historial:()=>{
            return `
              <div id="modal_historial" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                       
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">

                                    <h3>Historial de Pagos del Gymbro</h3>
                                    <h5 class="text-warning negrita" id="lbHNomclie"><h5>
                                    

                                    <div class="table-responsive">
                                        
                                        <table class="table table-bordered h-full col-12">
                                            <thead class="negrita text-warning">
                                                <tr>
                                                    <td>FECHA PAGO</td>
                                                    <td>MES</td>
                                                    <td>IMPORTE</td>
                                                </tr>
                                            </thead>
                                            <tbody id="tblDataHistorial">
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>

                                
                            <div class="row">

                                <div class="col-6">
                                    <button class="btn btn-danger btn-circle btn-xl mano shadow" data-dismiss="modal">
                                        <i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
                                    </button>
                                </div>

                                <div class="col-6">
                                 
                                </div>

                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        } 
    }

    root.innerHTML = view.body();

};


function addListeners(){

    F.slideAnimationTabs();


 
    let btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click',()=>{


        let u = document.getElementById('txtUser').value || '';
        let p = document.getElementById('txtPass').value || '';

        if(u==''){F.AvisoError('Escriba su nombre de usuario');return;};
        if(p==''){F.AvisoError('Escriba su clave');return;};


        btnLogin.disabled = true;

        fcn_login(u,p)
        .then((data)=>{

            data.recordset.map((r)=>{
                GlobalCodSucursal = r.EMPNIT;
                TOKEN = r.TOKEN;
                GlobalTipo = r.TIPO;
            })

            btnLogin.disabled = false;

            document.getElementById('tab-uno').click();

            get_sucursales()
            .then(()=>{

                get_clave_general();

                iniciar_clave_general();


            })
            .catch(()=>{

            })

         

        })
        .catch(()=>{

            btnLogin.disabled = false;

            F.AvisoError('Usuario o clave incorrectos');

        })
        

    })



    //copiar al portapapeles
    let clavegen = document.getElementById('lbClaveGeneral');
    clavegen.addEventListener('click',async()=>{
         try {
            await navigator.clipboard.writeText(clavegen.innerText);
                console.log('Contenido copiado al portapapeles');
                F.Aviso('Codigo copiado: ' + clavegen.innerText);
            } catch (err) {
                console.error('Error al copiar: ', err);
                F.AvisoError('No se copio el codigo');
            }
    })
    

    document.getElementById('cmbSucursal').addEventListener('change',()=>{
       GlobalCodSucursal = document.getElementById('cmbSucursal').value;
        get_clave_general();
    })

};

function initView(){

    getView();
    addListeners();

};

initView();


function fcn_login(usuario,clave){

    return new Promise((resolve,reject)=>{
   
           axios.post('/login',{u:usuario,p:clave})
           .then((response) => {
               if(response.status.toString()=='200'){
                   let data = response.data;
                   if(data.toString()=="error"){
                       reject();
                   }else{
                       if(Number(data.rowsAffected[0])>0){
                           resolve(data);             
                       }else{
                           reject();
                       } 
                   }       
               }else{
                   reject();
               }                   
           }, (error) => {
               reject();
           });
       }) 
   
};
   





function iniciar_clave_general(){
    
  
    setInterval(() => {
        //document.getElementById('lbClaveGeneral').innerText = '--- --- ---';

        get_clave_general();
    }, 10000);


};
function data_clave_general(){

    return new Promise((resolve,reject)=>{

        axios.post('/select_clave_general',{sucursal:GlobalCodSucursal,tipo:GlobalTipo})
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};
function get_clave_general(){


    let lbClaveGeneral = document.getElementById('lbClaveGeneral');
    let container_qr = document.getElementById('container_qr');


    data_clave_general()
    .then((data)=>{

        let codigo = '';
        data.recordset.map((r)=>{
            codigo = r.CLAVE_1;
        })

        lbClaveGeneral.innerText = codigo;

        container_qr.innerHTML = '';
        new QRCode(container_qr, codigo);

    })
    .catch(()=>{
         lbClaveGeneral.innerText = '--- --- ---'
         container_qr.innerHTML = '';
    })

};

function get_sucursales(){

    return new Promise((resolve,reject)=>{

            data_sucursales()
            .then((data)=>{
                let str = '';
                data.recordset.map((r)=>{
                    str += `<option value='${r.EMPNIT}'>${r.SUCURSAL}</option>`
                })
                document.getElementById('cmbSucursal').innerHTML = str;
                GlobalCodSucursal = document.getElementById('cmbSucursal').value;
                resolve();
            })
            .catch(()=>{
                document.getElementById('cmbSucursal').innerHTML = `<option value=''>NO SE CARGARON SUCURSALES</option>`;
                GlobalCodSucursal = '';
                reject();
            })

    })

    
};
function data_sucursales(){

    return new Promise((resolve,reject)=>{

        axios.post('/select_empresas_token',{token:TOKEN})
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};


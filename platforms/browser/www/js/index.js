/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var contadorTareas=0;
 var i=0;
		
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        			
		$("#btnAddTarea").click(
			function(){
				var str = "<a href=\"#\" class=\"list-group-item\" data-id-tarea=\""+contadorTareas+"\">"+"<h4 class=\"list-group-item-heading\">"+$("#tareaNombre").val()+"</h4>"+"<p class=\"list-group-item-text\"><div class=\"checkbox\"><label><input type=\"checkbox\">Finalizar</label></div></p></a>";
				$("#listaTarea").append(str);
				$("#tareaNombre").val('');
				contadorTareas++;
			}
		);

		$("#btnVaciar").click( 
			function(){ 
				$("#listaTarea").empty(); 	
			} 
		);

		$("#listaTarea").on("click","a",function() {
			var id_tarea = $(this).attr('data-id-tarea');
			console.log("data-id-tarea="+id_tarea);
			var posicion_tarea = 1 + $(this).index(); //index(): Vuelve la posición de base cero del elemento de la lista.
			console.log("PosicionTarea="+posicion_tarea);

            // Resultado del proceso de Dialogo (buttonIndex)
              function onConfirm(buttonIndex){
                  console.log("onConfirm= "+buttonIndex);
                  console.log("ToRemove= "+id_tarea);
                  if(buttonIndex == 1){ // Boton Si
                      $("#listaTarea a:nth-child("+posicion_tarea+")").remove();
                      contadorTareas--;
                      alert('Se elimino tarea: '+(posicion_tarea));
                  }
              };

			// Dialogo
			navigator.notification.confirm(
				'Desea eliminar?', // message
				onConfirm,  // callback con el índice del botón presionado
				'Eliminar Tarea',  // title
				['Si' , 'Salir']  // etiquetas de los botones
			);

			return false; //Return Funcion, Importante para que no se ejecute dos veces.
		});
    }
};

app.initialize();
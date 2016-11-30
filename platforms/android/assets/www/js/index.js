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
		
		// Resultado del proceso de Dialogo
		function onConfirm(buttonIndex) {
			$("#listaTarea a:nth-child("+buttonIndex+")").remove();
			contadorTareas--;	
			alert('Se elimino: ' + buttonIndex);
		 }
		
		$('#listaTarea').on("click","a",function() { 		
			console.log($(this).attr('data-id-tarea')); 
			var i = 1 + $(this).index(); 
			console.log(i); 
			
			navigator.notification.confirm(
				 'Desea eliminar?', // message
				 onConfirm(i),  // callback con el índice del botón presionado
				 'Eliminar Tarea',  // title
				 ['Si','Salir']  // etiquetas de los botones
			 );	
		});
		
			
					
    }
};

app.initialize();
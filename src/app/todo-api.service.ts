import { Injectable } from '@angular/core';


/*Credentials connection db

    Serveur : 127.0.0.1 via TCP/IP
    Type de serveur : MariaDB
    Connexion au serveur : SSL n'est pas utilisé Documentation
    Version du serveur : 10.4.28-MariaDB - mariadb.org binary distribution
    Version du protocole : 10
    Utilisateur : root@localhost
    Jeu de caractères du serveur : UTF-8 Unicode (utf8mb4)

*/

// ? template de service de connexion à la db locale XAMPP
@Injectable({
  providedIn: 'root'
})
export class TodoAPIService {

  constructor() { }

  // async function that connects to the node server and returns the tasks that are dued today (return type int)
  async tasksNumber() {
    const response = await fetch('http://localhost:3000/tasksNbr');
    const data = await response.json();
    return data.length;
  }

  // async functions that connects to the node server and returns the tasks that are dued today (return type array)
  async tasksToday() {
    const response = await fetch('http://localhost:3000/tasksToday');
    const data = await response.json();
    return data;
  }

  // async functions that connects to the node server and returns all the tasks (return type array)
  async allTasks() {
    const response = await fetch('http://localhost:3000/tasksAll');
    const data = await response.json();
    return data;
  }

}




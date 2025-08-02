import express from 'express';
import{
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    insertarSuperHeroeController,
    eliminarSuperHeroeIdController,
    eliminarSuperHeroeNombreController,
    actualizarSuperHeroeController,
    nuevoHeroeFormController,
    editarHeroeFormController
} from '../controllers/superheroesController.mjs';
import {registerValidationRules} from '../validations/validationRules.mjs';
import {handleValidationErrors} from '../error_middle/errorMiddleware.mjs'



const router = express.Router();


router.get('/heroes/editarHeroe/:id', editarHeroeFormController);
router.get('/heroes/nuevoHeroe',nuevoHeroeFormController);


router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayoresA30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

router.post('/heroes/insertar', registerValidationRules(), handleValidationErrors('addSuperhero', 'Formulario Nuevo Heroe'), insertarSuperHeroeController);

router.put('/heroes/actualizar/:id', registerValidationRules(), handleValidationErrors('editSuperhero', 'Formulario Editar Heroe'), actualizarSuperHeroeController)

router.delete('/heroes/eliminar/id/:id',eliminarSuperHeroeIdController)
router.delete('/heroes/eliminar/nombre/:nombre',eliminarSuperHeroeNombreController);

router.get('/', (req,res) =>{
    res.render('index', {title: 'Pagina Principal'});
});


export default router;
<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// user routs
Route::post('/register','UserController@register');
Route::post('/login','UserController@authenticate');
Route::post('/getuser', [UserController::class, 'getauthuser']);
Route::post('/tasks', [TaskController::class, 'create']);
Route::post('/tasklist', [TaskController::class, 'tasklist']);
Route::put('task/{id}', [TaskController::class, 'task']);
Route::put('/taskupdate/{id}', [TaskController::class, 'update']);
Route::put('/taskdelete/{id}', [TaskController::class, 'delete']);

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});


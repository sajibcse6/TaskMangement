<?php

namespace App\Http\Controllers;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    //

    public function create(Request $request)
    {
        $user = JWTAuth::setToken($request->token)->toUser();
        
        if($user) {
            $task = new Task();
            $task->username = $user->username;
            $task->title = $request->title;
            $task->description = $request->description;
            $task->status = $request->status;
            $task->save();

            return response()->json([
                "message" => "Task Created Successfully"
            ], 201);
        }
        else {
            return response()->json([
                "message" => "Please Login to Create Task"
            ], 401);
        }
    }

    public function tasklist(Request $request)
    {
        $user = JWTAuth::setToken($request->token)->toUser();

        if($user) {
            $tasklist = DB::table('tasks')
                                ->where('username', $user->username)
                                ->get()
                                ->values();
            return response()->json($tasklist);
        }
        else {
            return response()->json([
                "message" => "Please Login to Create Task"
            ], 401);
        }
    }

    public function task(Request $request, $id)
    {
        $user = JWTAuth::setToken($request->token)->toUser();

        if($user) {
            if(Task::where('id', $id)->exists()) {
                $task= Task::find($id);
                return response()->json($task);
            } else {
                return response()->json([
                  "message" => "Task not found"
                ], 404);
            }
        }
        else {
            return response()->json([
                "message" => "Please Login to Create Task"
            ], 401);
        }
    }

    public function update(Request $request, $id)
    {
        $user = JWTAuth::setToken($request->token)->toUser();

        if($user) {
            if(Task::where('id', $id)->exists()) {
                $task= Task::find($id);
                $task->title = $request->title;
                $task->description = $request->description;
                $task->status = 1;
        
                $task->save();
        
                return response()->json([
                  "message" => "Task updated successfully"
                ], 200);
            } else {
                return response()->json([
                  "message" => "Task not found"
                ], 404);
            }
        }
        else {
            return response()->json([
                "message" => "Please Login to Create Task"
            ], 401);
        }
    }

    public function delete(Request $request, $id)
    {
        $user = JWTAuth::setToken($request->token)->toUser();

        if($user) {
            if(Task::where('id', $id)->exists()) {
                $task= Task::find($id);
                $task->delete();
        
                return response()->json([
                  "message" => "Task deleted successfully"
                ], 200);
            } else {
                return response()->json([
                  "message" => "Task not found"
                ], 404);
            }
        }
        else {
            return response()->json([
                "message" => "Please Login to Create Task"
            ], 401);
        }
    }
}

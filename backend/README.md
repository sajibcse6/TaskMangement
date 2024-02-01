
# Task Mangement Backend Using Laravel 




## Installation

1. Clone the repository. Open git bash and run

```bash
  git clone https://github.com/sajibcse6/TaskMangement.git
```
2. Switch to the repository folder

```bash
  cd TaskMangement\backend
```

3. Install all the dependencies using composer

```bash
  composer install
```
4. Rename .env.example file to .env
5. Generate a new JWT authentication secret key

```bash
  php artisan jwt:secret
```
6. Create a new database into your mysql database named:
```bash
taskmanagement
```
7. Run the Comand
```bash
  php artisan migrate
```

8. Note : It's recommended to have a clean database before seeding. You can refresh your migrations at any point to clean the database by running the following command
```bash
  php artisan migrate:refresh
```

9. Run the following comand and the project will be run
```bash
  php artisan serve
```
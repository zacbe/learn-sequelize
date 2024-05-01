## 1. Create a table called Student

- `student_id`: Integer, Primary Key, Auto Increments
- `name`: VARCHAR(255), Doesn't Allow Null Values, Validate Name is Between Length of 4 and 20 Characters.
- `favorite_class`: VARCHAR(255), Default Value is Computer Science
- `school_year`: Integer, Doesn't Allow Null Values
- `subscribed_to_wittcode`: Tiny Int, Default Value is True

## 2. Bulk create some users with validation.

## 3. Query the table:

- Retrieve the name of every student whose their favorite class is Computer Science or they are subscribed to WittCode
- Count the total amount of students in each school year and give the returned column the alias num_students.

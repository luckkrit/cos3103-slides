---
layout: section
---

# DB Constraints

---

```sql {monaco-run} {autorun:false}
-- db: noaction
CREATE TABLE IF NOT EXISTS Department(
  Id   INT PRIMARY KEY,
  Name VARCHAR(50)
);

Insert into Department values (10, 'IT');
Insert into Department values (20, 'HR');
Insert into Department values (30, 'INFRA');

CREATE TABLE IF NOT EXISTS Employees(
  Id INT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  DepartmentID INT,
  FOREIGN KEY (DepartmentID) REFERENCES Department(Id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

INSERT into Employees VALUES (101, 'Anurag', 10);
INSERT into Employees VALUES (102, 'Pranaya', 20);
INSERT into Employees VALUES (103, 'Hina', 30);
INSERT into Employees VALUES (104, 'apirak', 10);
```

---

- ก่อนรัน อย่าลืมไป refresh แล้วรัน create table ใหม่

```sql {monaco-run} {autorun:false}
-- db: noaction
DELETE FROM Department WHERE Id = 10;
```

---

- ก่อนรัน อย่าลืมไป refresh แล้วรัน create table ใหม่

```sql {monaco-run} {autorun:false}
-- db: noaction
UPDATE Department SET Id = 40 WHERE Id = 30;
```

---

- ก่อนรัน อย่าลืมไป refresh แล้วรัน create table ใหม่

```sql {monaco-run} {autorun:false}
-- db: noaction
 DELETE FROM employees WHERE Id = 101;
```

---

```sql {monaco-run} {autorun:false}
-- db: noaction
CREATE TABLE department ( id INT PRIMARY KEY,  name VARCHAR(50) ); 
INSERT INTO department VALUES (10, 'IT'); 
INSERT INTO department VALUES (20, 'HR'); 
INSERT INTO department VALUES (30, 'INFRA');

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  department_id INT
);
ALTER TABLE employees
  ADD CONSTRAINT fk_employees_department
  FOREIGN KEY (department_id) REFERENCES department(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

INSERT INTO employees VALUES (101, 'Anurag', 10);
INSERT INTO employees VALUES (102, 'Pranaya', 20);
INSERT INTO employees VALUES (103, 'Hina', 30);
INSERT INTO employees VALUES (104, 'apirak', 10);

```

---

- ก่อนรัน อย่าลืมไป refresh แล้วรัน create table ใหม่

```sql {monaco-run} {autorun:false}
-- db: noaction
UPDATE Department SET Id = 40 WHERE Id = 30 ;
SELECT * FROM Department;
```

---

- ก่อนรัน อย่าลืมไป refresh แล้วรัน create table ใหม่

```sql {monaco-run} {autorun:false}
-- db: noaction
DELETE FROM Employees WHERE Id = 102;
SELECT * FROM Employees;
```

---

```sql {monaco-run} {autorun:false}
-- db: noaction
CREATE TABLE department ( id INT PRIMARY KEY, name VARCHAR(50) );
Insert   into   Department values (10, 'IT');
Insert   into   Department values (20, 'HR');
Insert   into   Department values (30, 'INFRA');

CREATE TABLE employees ( id INT PRIMARY KEY, name VARCHAR(100) NOT NULL,        department_id INT, 
       FOREIGN KEY (department_id) REFERENCES department(id) 
               ON DELETE SET NULL 
               ON UPDATE SET NULL 
);

INSERT   into   Employees VALUES (101, 'Anurag', 10); 
INSERT   into   Employees VALUES (102, 'Pranaya', 20); 
INSERT   into   Employees VALUES (103, 'Hina', 30);
INSERT  into   Employees VALUES (104, 'apirak', 10); 


```

---

- ก่อนรัน อย่าลืมไป refresh แล้วรัน create table ใหม่

```sql {monaco-run} {autorun:false}
-- db: noaction

DELETE FROM Department WHERE Id = 10 ;
SELECT * FROM Department;
SELECT * FROM Employees;
```

---

- ก่อนรัน อย่าลืมไป refresh แล้วรัน create table ใหม่

```sql {monaco-run} {autorun:false}
-- db: noaction
UPDATE Department SET Id = 40  WHERE  Id = 30 ;
SELECT * FROM Employees;
SELECT * FROM Department;
```
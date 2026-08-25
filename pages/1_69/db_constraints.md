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

```sql {monaco-run} {autorun:false}
-- db: noaction
DELETE FROM Department WHERE Id = 10;
```

---

```sql {monaco-run} {autorun:false}
-- db: noaction
UPDATE Department SET Id = 40 WHERE Id = 30;
```

---

```sql {monaco-run} {autorun:false}
-- db: noaction
 DELETE FROM employees WHERE Id = 101;
```


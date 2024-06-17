zadanie 1 dodaj do tabeli: typy rekord z nastepujacymi danymi: 
•	RangaId: 52 
•	Nazwa: Klient Testowy 
•	Skrót: test.ph 
•	Opis: Eurocash Klient Testowy 
•	Status: A 
•	Limit: 0
•	Sort: 99 
•	DzialId: 0 
•	FormSieciId: 1

INSERT INTO typy (RangaId, Nazwa, Skrot, Opis, Status, Limit, Sort, DzialId, FormSieciId)
VALUES (52, 'Klient Testowy', 'test.ph', 'Eurocash Klient Testowy', 'A', 'o', 99, 0, 1);

Zadanie 2 
•	Dla nowego typu zaktualizować datę utworzenia (kolumna utworzona) oraz modyfikacji (kolumna modyfikacyjna) na aktualną.
•	Wyświetlić wszystkie rekordy z tabeli typy w kolejności daty utworzenia (od najnowszych)

ALTER TABLE ExampleTable
ADD utworzona datetime, modyfikacyjna datetime;
INSERT INTO typy (RangaId, Nazwa, Skrot, Opis, Status, Limit, Sort, DzialId, FormSieciId, utworzona, modyfikacyjna)
VALUES (52, 'Klient Testowy', 'test.ph', 'Eurocash Klient Testowy', 'A', 'o', 99, 0, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
SELECT * FROM typy
ORDER BY utworzona DESC;

Zadanie 3
Usunać z tabeli typy rekord z utworzonym wcześniej typem użytkownika

DELETE FROM typy
WHERE RangaId = 52;

 
Zadanie 4

W jednym zapytaniu (poprzez złączenie tabeli) wyświetlić informację o rangach (tabela rangi) oraz przypisanych do nich typach (tabela typy). Wymagane kolumny: 
•	RangaId
•	Nazwa Rangi
•	Opis Rangi
•	TypId
•	Nazwa Typu
•	Status Typu
•	Data utworzenia typu

SELECT 
    rangi.RangaId, 
    rangi.Nazwa AS Nazwa_Rangi, 
    rangi.Opis AS Opis_Rangi, 
    typy.RangaId AS TypId, 
    typy.Nazwa AS Nazwa_Typu, 
    typy.Status AS Status_Typu, 
    typy.utworzona AS Data_utworzenia_typu
FROM 
    rangi
JOIN 
    typy ON rangi.RangaId = typy.RangaId;
 
Zadanie 5 

Jednym zapytaniem usunąć zdublowane wpisy w tabeli Randomtable.

DROP TABLE ExampleTable;
CREATE TABLE ExampleTable (
    ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Value INT
);

-- Wstawianie danych, w tym duplikatów
INSERT INTO ExampleTable (ID, Name, Value) VALUES
(1, 'John', 100),
(2, 'Jane', 200),
(3, 'Bob', 150),
(4, 'John', 100), -- Duplikat
(5, 'Alice', 300),
(6, 'Jane', 200), -- Duplikat
(7, 'Bob', 150);   -- Duplikat

Select * from ExampleTable;

Select * From ExampleTable s Inner Join ExampleTable s1
On s.Name=s1.Name And s.Value=s1.Value 
Where s.Id>s1.Id

Delete ExampleTable where Id in(
Select s.Id From ExampleTable s Inner Join ExampleTable s1
On s.Name=s1.Name And s.Value=s1.Value 
Where s.Id>s1.Id
);

SELECT * from ExampleTable;

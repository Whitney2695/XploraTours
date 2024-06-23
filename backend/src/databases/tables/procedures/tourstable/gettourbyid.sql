CREATE PROCEDURE GetTourByID
    @tour_id INT
AS
BEGIN
    SELECT * FROM Tours WHERE tour_id = @tour_id;
END

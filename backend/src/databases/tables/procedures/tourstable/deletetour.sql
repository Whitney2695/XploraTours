CREATE PROCEDURE DeleteTour
    @tour_id INT
AS
BEGIN
    DELETE FROM Tours WHERE tour_id = @tour_id;
END

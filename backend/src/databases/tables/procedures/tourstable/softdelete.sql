-- Create or alter stored procedure to soft delete tour
CREATE OR ALTER PROCEDURE SoftDeleteTour
    @tourId INT
AS
BEGIN
    UPDATE Tours
    SET deleted_at = GETDATE()
    WHERE tour_id = @tourId;
END;


DROP PROCEDURE SoftDeleteTour;

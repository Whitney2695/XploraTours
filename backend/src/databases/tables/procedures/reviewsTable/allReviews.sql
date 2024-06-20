CREATE PROCEDURE GetReviewsForTour
    @tour_id INT
AS
BEGIN
    SELECT review_id, user_id, rating, review_text, created_at
    FROM Reviews
    WHERE tour_id = @tour_id;
END;

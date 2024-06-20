CREATE PROCEDURE InsertReview
    @user_id INT,
    @tour_id INT,
    @rating TINYINT,
    @review_text TEXT
AS
BEGIN
    INSERT INTO Reviews (user_id, tour_id, rating, review_text)
    VALUES (@user_id, @tour_id, @rating, @review_text);
END;

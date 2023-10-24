import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ArticleCard = ({ article }) => {
  const openArticleLink = () => {
    window.open(article.url, "_blank");
  };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={openArticleLink}>
      <CardMedia
        component="img"
        height="140"
        image={article.multimedia[0].url}
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.abstract}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;

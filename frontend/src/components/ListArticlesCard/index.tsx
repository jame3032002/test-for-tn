import ArticleCard from "../ArticleCard";
import ArticleCardLoading from "../ArticleCard/ArticleCard.loading";
import NotFoundArticle from "../ArticleCard/NotFoundArticle";

interface IProps {
  data: ITrip[];
  isLoading: boolean;
}

interface ITrip {
  id: string;
  title: string;
  url: string;
  description: string;
  photos: string[];
  tags: string[];
}

const ListArticlesCard = (props: IProps) => {
  const { isLoading, data } = props;

  if (isLoading) {
    return (
      <>
        <ArticleCardLoading />
        <ArticleCardLoading />
        <ArticleCardLoading />
      </>
    );
  }

  if (data?.length > 0) {
    return data.map((trip: ITrip) => {
      return <ArticleCard data={trip} key={trip.id} />;
    });
  }

  return <NotFoundArticle />;
};

export default ListArticlesCard;

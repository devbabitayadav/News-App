import DefaultImage from "../assets/default.webp";

const NewsCard = ({ news }) => {
  return (
    <div class="card mb-3 rounded-0">
      <div class="row g-0 d-flex">
        <div class="col-md-4 d-flex">
          <img
            src={news.urlToImage ? news.urlToImage : DefaultImage}
            class="img-fluid rounded-0 "
            alt="..."
          />
        </div>
        <div class="b2 col-md-8">
          <div class="card-body">
            <h5 class="card-title mb-3 fs-4"dangerouslySetInnerHTML={{ __html: news.title}} ></h5>
            <p
              class="card-text text-danger-subtle"
              dangerouslySetInnerHTML={{ __html: news.description}}
            ></p>
            <p class="card-text">
              <small class="text-body-secondary" dangerouslySetInnerHTML={{ __html: news.author}}></small>
            </p>
            <a
              href={news.url}
              target="_blank"
              className="btn btn-primary rounded-0 mt-3"
            >
              Read Full News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

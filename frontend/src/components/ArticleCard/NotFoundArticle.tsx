import Link from "next/link";
import Image from "next/image";

const NotFoundArticle = () => {
  return (
    <div className="text-center">
      <Image
        alt="Not found article"
        src={"/not-found.png"}
        className="mx-auto"
        width={400}
        height={400}
      />
      <div>Sorry, the resource you requested cannot be found</div>

      <div>
        Go back to{" "}
        <Link href={`/`} className="inline-block">
          <h1 className=" text-cyan-400 hover:text-cyan-500">เที่ยวไหนดี</h1>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundArticle;

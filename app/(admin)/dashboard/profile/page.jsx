import Image from "next/image";
import Card from "../../ui/profile_card/card";

const Profile = () => {
  return (
    <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-72 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(/images/cover/cover-01.png)` }}
      >
        <div className="dark:!border-navy-700 absolute -bottom-28 flex h-60 w-60 items-center justify-center rounded-full border-[4px] border-white bg-gray-600">
          <Image
            className="w-full h-full rounded-full bg-cover object-cover"
            src="/images/dara.jpg"
            alt="user photo"
            width={800}
            height={8}
          />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-36 flex flex-col items-center">
        <h4 className="text-navy-700 text-xl font-bold dark:text-green-800">
          Adela Parkson
        </h4>
        <h5 className="text-base font-normal text-gray-600">Product Manager/ FullStack Developer</h5>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold dark:text-black">
            17
          </h4>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold dark:text-black">
            9.7K
          </h4>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold dark:text-black">
            434
          </h4>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
    </Card>
  );
};

export default Profile;

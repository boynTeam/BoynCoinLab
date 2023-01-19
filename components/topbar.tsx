import Wallet from "./wallet";

const TopBar = () => {
  return (
    <header>
      <nav className="px-48 pt-4">
        <ul>
          <li className="flex ">
            <div className="flex flex-1">
              <p className="mx-2">🧘‍♂️ AboutMe</p>
              <p className="mx-2">🧘‍♂️ Posts</p>
            </div>
            <div className="flex justify-end">
              <Wallet />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default TopBar;

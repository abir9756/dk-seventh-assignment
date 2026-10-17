"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navlinks from "./Navlinks";
import Link from "next/link";
import { signOut, useSession } from "../lib/auth-client";
import {
  Button,
  ButtonGroup,
  Description,
  Dropdown,
  Label,
  Spinner,
} from "@heroui/react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { ChevronDown } from "@gravity-ui/icons";
import { TbArrowBack } from "react-icons/tb";

const Navbar = () => {
  const { data: session, isPending } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    );
  }
 

  const authLink = (
    <div>
      {session?.user ? (
        <>
          <div className="flex flex-col gap-2">
            <ButtonGroup variant="tertiary">
              <Button>
                {" "}
                <span className="font-semibold ">{session.user?.name}</span>
              </Button>
              <Dropdown>
                <Button variant="tertiary" isIconOnly aria-label="More options">
                  <RiArrowDropDownFill />
                </Button>
                <Dropdown.Popover
                  className="max-w-[290px]"
                  placement="bottom end"
                >
                  <Dropdown.Menu>
                    <Dropdown.Item
                      className="flex flex-col items-start gap-1"
                      id="merge"
                      textValue="Create a merge commit"
                    >
                      <span className="font-semibold">
                        {session.user?.name}
                      </span>
                      <span>{session.user?.email}</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="flex flex-col items-start gap-1"
                      id="squash-and-merge"
                      textValue="Squash and merge"
                    >
                      <Link href={"/profile"}>👤 আমার প্রোফাইল</Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="flex flex-col items-start gap-1"
                      id="rebase-and-merge"
                      textValue="Rebase and merge"
                    >
                      <span
                        className="flex items-center text-error gap-1"
                        onClick={() => signOut()}
                      >
                        <TbArrowBack />
                        সাইন আউট
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </ButtonGroup>
          </div>
        </>
      ) : (
        <>
          <Link href={"/sign-in"}>
            {" "}
            <button className="btn border-none font-semibold ">সাইন ইন</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn bg-[#05893E] text-white  font-semibold rounded-xl">
              সাইন আপ
            </button>
          </Link>
        </>
      )}
    </div>
  );

  return (
    <header>
      <div className=" border-b border-base-300">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
         <Link href={'/'}>
          <div className="flex gap-2">
            <Image
              className="bg-green-600 rounded-2xl"
              src={"/logo-icon.png"}
              alt="logo"
              height={50}
              width={50}
            />
            <div>
              <h1 className="font-bold text-2xl">বাজার দর</h1>
              {/* <p>{date}</p> */}
              <p suppressHydrationWarning>
                {new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })}
              </p>
            </div>
          </div></Link>
          <div>{authLink}</div>
          {menuOpen && (
            <ul className="menu bg-base-200 rounded-box  w-56">
              <li>
                <span>{session.user?.name}</span>
              </li>
              <li>
                <span>{session.user?.email}</span>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

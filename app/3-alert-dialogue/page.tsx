"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  const [dialogueState, setDialogueState] = useState("open");

  const handleCancle = () => {
    setDialogueState("cancel");
  };

  const handleContinue = () => {
    setDialogueState("continue");
  };

  if (dialogueState === "cancel") {
    console.log("Canceled");
  }

  if (dialogueState === "continue") {
    console.log("Continued");
  }
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Alert Dialogue
      </h1>
      <AlertDialog>
        <AlertDialogTrigger
          className={buttonVariants({ variant: "secondary" })}
        >
          Open
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancle}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinue}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <br />
      <p>
        {" "}
        <Link
          target="_blank"
          href="https://bard.google.com/chat/055093d90eff2d23"
        >
          Learn more
        </Link>{" "}
      </p>
    </div>
  );
};

export default Page;

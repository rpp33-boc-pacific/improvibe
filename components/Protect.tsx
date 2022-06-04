/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Protect (WrappedComponent: any) {

    return function ProtectedComponent () {

      const router = useRouter();
      const { data: session, status } = useSession();

      useEffect(() => {
        if (status === "unauthenticated" ) {
          router.push("/logIn");
        }
      })

      return <WrappedComponent />;
    };
  }

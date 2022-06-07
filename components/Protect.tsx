/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';

function Protect (WrappedComponent: any) {

    function ProtectedComponent () {
      return <WrappedComponent />;
    };

    ProtectedComponent.getInitialProps = async (context: any) => {
      const { req, res } = context;
      const session = await getSession({ req });
      if (!session) {
        res.writeHead(302, {
          Location: "/logIn",
        });
        res.end();
        return;
      }

      return {
        session: session
      };
    };

    return ProtectedComponent;
  }

  export default Protect;

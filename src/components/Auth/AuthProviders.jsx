import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { _userGoogleAuth } from '../../functions/_userAuth'
import { auth, provider } from '../../api/database/connect'

export default function AuthProviders() {
  return (
    <>
        <div className="lines">
            <div className="line"></div>
            or
            <div className="line"></div>
        </div>
        <div className="buttons">
            <label onClick={() => _userGoogleAuth(auth, provider, undefined)} className="provider"><FontAwesomeIcon icon={faGoogle} />Login with Google</label>
            <label className="provider"><FontAwesomeIcon icon={faFacebook} />Login with Facebook</label>
        </div>
    </>
  )
}

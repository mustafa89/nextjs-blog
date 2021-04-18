import Link from 'next/link'

const Card = ({ Title, Description, Date, File }) => (
    <Link href={`/blog/${File}`}>
          <div className="column is-12 is-clickable mb-5">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <p className="title has-text-black is-size-3-desktop">
                    {Title}
                  </p>
                  <p className="subtitle is-size-6-desktop">
                   {Description}
                  </p>
                  <br />
                  <time dateTime="2016-1-1">{Date}</time><br />
                  <span className="has-text-weight-light is-size-6"
                    >Published by: Mustafa Mujahid</span
                  >
                </div>
              </div>
            </div>
          </div>     
    </Link>
)

export default Card
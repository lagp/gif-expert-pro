import PropTypes from 'prop-types'

export interface GifItemProps {
  title: string
  url: string
}

export const GifItem = ({ title, url }: GifItemProps) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

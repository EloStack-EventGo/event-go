import mergeClassNames from '@/utils/mergeClass'

// Create reusable unique instances of Background component
// Use className to pass in any additional classes

const Background = ({ className, ...props }) => {
  const baseClass = 'absolute w-full bg-no-repeat bg-center bg-cover' // Define any base classes if needed
  const mergedClassNames = mergeClassNames(baseClass, className)

  return <div className={mergedClassNames} {...props} />
}

export default Background

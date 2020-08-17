import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleProp, ViewStyle } from 'react-native'

interface TypeProps {
  color?: string,
  style?: StyleProp<ViewStyle>
}

function SvgMedium(props: TypeProps) {
  return (
    <Svg width={25} height={25} fill="none" {...props} style={props.style}>
      <Path
        d="M9.505 5.205a2.823 2.823 0 01-.87-.538c-.204-.19-.428-.38-.31-.714.033-.093-.044-.113-.098-.15-.654-.46-.646-1.31.012-1.78.225-.15.481-.25.75-.287.136-.025.277-.035.245-.238a.174.174 0 01.05-.13c.216-.204.405-.496.663-.586.668-.232 1.26-.675 2-.71.395-.02.787-.088 1.184-.069.325.016.576.138.696.466.085.236.187.465.272.7.117.324.207.648.421.94.256.35.225.81.323 1.222.033.12.053.245.062.37.024.752.52 1.12 1.127 1.394.212.095.436.06.657.04.48-.045.966.005 1.428.146.485.15.833.481 1.124.872.636.854 1.54 1.354 2.44 1.85.331.182.662.353.947.603a.97.97 0 01.314 1.023c-.11.428-.182.866-.347 1.283-.18.458-.483.75-.924.971-.507.253-.966.597-1.49.828a7.944 7.944 0 01-1.178.394c-.356.094-.578.28-.633.649-.037.246-.185.39-.418.466-.395.129-.383.127-.187.505.372.718.768 1.424.81 2.268.02.402.258.733.557.985.611.516.869 1.181.917 1.956.016.26-.056.514-.006.777.039.209.096.394.258.533.266.229.371.523.408.864.031.29.151.562.343.78.298.352.502.772.781 1.143.248.328-.085.797-.52.785-.461-.012-.912.07-1.365.125-.155.018-.312-.023-.453-.01-.474.043-.926-.02-1.393-.083-.236-.033-.525.177-.823.15a.73.73 0 01-.62-.593.568.568 0 01.379-.64c.351-.117.497-.363.555-.703.157-.92.142-.951-.662-1.436a8.62 8.62 0 00-.743-.39c-.37-.176-.605-.464-.672-.879a8.755 8.755 0 01-.113-1.122c-.01-.312-.136-.535-.444-.676-.748-.343-1.298-.93-1.78-1.574-.22-.295-.469-.455-.84-.48-.41-.027-.824-.035-1.224-.185-.26-.097-.585.082-.733.344-.47.831-1.148 1.413-2.053 1.732-.37.13-.45.242-.27.579.424.79.221 1.418-.387 1.993-.13.13-.24.28-.326.441-.206.355-.109.787.272 1.141a.491.491 0 01.154.545c-.091.324-.235.613-.548.782a1.135 1.135 0 00-.348.301c-.39.495-.925.566-1.466.41-.4-.117-.798-.075-1.192-.103-.547-.04-1.094-.072-1.637-.147-.4-.055-.598-.418-.436-.77.099-.215.302-.215.488-.251.761-.148 1.702-1.087 1.854-1.843a.706.706 0 00-.022-.398c-.068-.18-.116-.371-.205-.54a1.718 1.718 0 01-.054-1.585c.125-.282.136-.596.093-.907a.836.836 0 010-.317c.211-.808.48-1.59 1.11-2.189.132-.126.248-.27.368-.407.036-.04.1-.083.057-.146a.147.147 0 00-.182-.045c-.073.026-.143.059-.217.081-.308.093-.62.163-.936.043-.166-.063-.323.02-.486.007-.456-.037-.86-.223-1.236-.458-.378-.237-.45-.524-.272-.946a.939.939 0 00.004-.78c-.147-.346-.271-.702-.404-1.054a1.377 1.377 0 01-.009-.934c.124-.386.254-.771.342-1.166.056-.249.043-.514.056-.772.015-.287.135-.516.41-.609.505-.169.862-.535 1.24-.877.277-.252.62-.386.961-.52.75-.29 1.461-.633 2.08-1.167.44-.379 1.014-.45 1.573-.51.248-.027.495-.076.747-.073zm-2.334 8.62c.825-.21 1.22-.819 1.555-1.487.039-.078.077-.153.026-.244-.2-.362-.1-.69.127-.994.135-.183.088-.316-.045-.484-.34-.431-.796-.377-1.242-.311-.331.048-.677.121-.873.443-.294.483-.17 1.214.258 1.578.073.062.149.122.22.188.202.188.274.4.164.674-.082.203-.127.42-.19.637z"
        fill={props.color ?? '#AEBFD7'}
      />
    </Svg>
  );
}

export default SvgMedium;